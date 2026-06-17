import os
import sys

import pygame
from Person import person
from Boat import boat


# ---------------------------------------------------------------------------
# Runtime paths
# ---------------------------------------------------------------------------
# BASE_DIR makes asset loading independent from the terminal working directory.
# resource_path() also supports PyInstaller builds by reading assets from
# sys._MEIPASS when the game is running as a bundled Windows executable.
BASE_DIR = os.path.dirname(os.path.abspath(__file__))


def resource_path(relative_path):
    """
    Return an absolute path for bundled assets.

    Development mode:
        Uses the original-pygame folder beside main.py.

    PyInstaller mode:
        Uses sys._MEIPASS, the temporary extraction folder used by PyInstaller.
    """
    try:
        base_path = sys._MEIPASS
    except AttributeError:
        base_path = BASE_DIR

    return os.path.join(base_path, relative_path)


def image_path(filename):
    return resource_path(os.path.join("images", filename))


def music_path(filename):
    return resource_path(os.path.join("music", filename))


def load_image(filename):
    """Load required image assets with a clear error message if a file is missing."""
    path = image_path(filename)
    if not os.path.exists(path):
        raise FileNotFoundError(f"Image asset not found: {path}")
    return pygame.image.load(path)


def load_sound(filename):
    """Load optional sound effects. If audio fails, keep the game running."""
    path = music_path(filename)
    if not os.path.exists(path):
        print(f"[Audio warning] Sound file not found: {path}")
        return None

    if not pygame.mixer.get_init():
        print(f"[Audio warning] Pygame mixer is not initialized. Skipping: {filename}")
        return None

    try:
        return pygame.mixer.Sound(path)
    except pygame.error as error:
        print(f"[Audio warning] Could not load {filename}: {error}")
        return None


def play_sound(sound):
    """Play a sound safely without crashing when audio is unavailable."""
    if sound is None:
        return

    try:
        sound.play(0)
    except pygame.error as error:
        print(f"[Audio warning] Could not play sound: {error}")


def start_background_music():
    """Start background music safely. Returns True if music is available."""
    if not pygame.mixer.get_init():
        print("[Audio warning] Pygame mixer is not initialized. Background music disabled.")
        return False

    path = music_path("bgmusic.mp3")
    if not os.path.exists(path):
        print(f"[Audio warning] Background music not found: {path}")
        return False

    try:
        pygame.mixer.music.load(path)
        pygame.mixer.music.play(-1)
        return True
    except pygame.error as error:
        print(f"[Audio warning] Could not play background music: {error}")
        return False


def pause_background_music():
    if pygame.mixer.get_init():
        try:
            pygame.mixer.music.pause()
        except pygame.error as error:
            print(f"[Audio warning] Could not pause music: {error}")


def resume_background_music():
    if pygame.mixer.get_init():
        try:
            pygame.mixer.music.unpause()
        except pygame.error as error:
            print(f"[Audio warning] Could not resume music: {error}")


def stop_background_music():
    if pygame.mixer.get_init():
        try:
            pygame.mixer.music.stop()
        except pygame.error as error:
            print(f"[Audio warning] Could not stop music: {error}")


def point_in_rect(point, x, y, width, height):
    px, py = point
    return x + width > px > x and y + height > py > y


def is_mouse_over(cursor, x, y, width, height):
    return point_in_rect(cursor, x, y, width, height)


pygame.init()

display_width = 1280
display_height = 650
gameDisplay = pygame.display.set_mode((display_width, display_height))
pygame.display.set_caption("Missionaries and cannibals")

# setting color values
black = (0, 0, 0)

# loading images
boatImg = load_image("boat.png")
bgImg = load_image("bg1.png")
mImg = load_image("missionary.png")
cImg = load_image("cannibal.png")
c1Img = load_image("cannibal1.png")
m1Img = load_image("missionary1.png")
ngImg = load_image("newgame.png")
ng1Img = load_image("newgame1.png")
gameoverImg = load_image("gameover.png")
wonImg = load_image("winner.png")
goImg = load_image("go.png")
go1Img = load_image("go1.png")
soundonImg = load_image("soundon.png")
soundoffImg = load_image("soundoff.png")

# Sound effects are optional. The game should still run if audio fails.
gameoversd = load_sound("gameover.wav")
wonsd = load_sound("won.wav")

# setting default font
font = pygame.font.SysFont(None, 25)


def run_game():
    x = display_width * 0.1
    y = display_height * 0.8
    x_change = 0

    # creating missionaries and cannibals objects
    mc = []
    mc.insert(0, person(x - 135, y - 100, 0, 0, "M", "left", mImg, m1Img, gameDisplay))
    mc.insert(1, person(x - 90, y - 100, 0, 0, "M", "left", mImg, m1Img, gameDisplay))
    mc.insert(2, person(x - 45, y - 100, 0, 0, "M", "left", mImg, m1Img, gameDisplay))
    mc.insert(3, person(x - 135, y - 250, 0, 0, "C", "left", cImg, c1Img, gameDisplay))
    mc.insert(4, person(x - 90, y - 250, 0, 0, "C", "left", cImg, c1Img, gameDisplay))
    mc.insert(5, person(x - 45, y - 250, 0, 0, "C", "left", cImg, c1Img, gameDisplay))

    # creating boat position objects
    boats = []
    boats.insert(0, boat(157, 478, 2, m1Img, c1Img, gameDisplay))
    boats.insert(1, boat(656, 478, 3, m1Img, c1Img, gameDisplay))
    boats.insert(2, boat(318, 478, 4, m1Img, c1Img, gameDisplay))
    boats.insert(3, boat(817, 478, 5, m1Img, c1Img, gameDisplay))

    clock = pygame.time.Clock()
    crashed = False
    restart_requested = False

    boat_position = 0  # 0 = boat at left shore, 1 = boat at right shore

    # Action representation:
    # action = [missionaries_on_boat, cannibals_on_boat]
    # It tracks the selected passengers before a boat transition.
    a, b = 0, 0
    action = [a, b]

    # State representation:
    # state = [M_left, C_left, Boat]
    # M_left = missionaries on the left bank
    # C_left = cannibals on the left bank
    # Boat = 1 when boat is on the left bank, 0 when boat is on the right bank
    state = [3, 3, 1]

    gameover = False
    gameoverplayed = False
    wonplayed = False
    left = False
    right = False
    won = False
    moves = 0  # counts successful boat crossings

    # Sound toggle flow:
    # Background music is optional and will be disabled automatically when loading fails.
    music_available = start_background_music()
    sound = music_available

    while not crashed and not restart_requested:
        mouse_clicked = False
        click_pos = None

        # Use event-based click handling so one physical click is processed once.
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                crashed = True
            elif event.type == pygame.KEYDOWN and event.key == pygame.K_ESCAPE:
                crashed = True
            elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
                mouse_clicked = True
                click_pos = event.pos

        # loading bgimage and new game image
        gameDisplay.blit(bgImg, (0, 0))
        gameDisplay.blit(ngImg, (1000, 45))
        if sound:
            gameDisplay.blit(soundonImg, (1150, 40))
        else:
            gameDisplay.blit(soundoffImg, (1150, 40))

        # loading the missionaries and cannibals image
        for i in range(6):
            mc[i].display()

        # displaying states, actions, moves
        state_text = font.render("State: " + str(state), True, black)
        gameDisplay.blit(state_text, [20, 20])
        action_text = font.render("Action: " + str(action), True, black)
        gameDisplay.blit(action_text, [20, 50])
        moves_text = font.render("No. of moves: " + str(moves), True, black)
        gameDisplay.blit(moves_text, [20, 80])
        cur = pygame.mouse.get_pos()

        # sound button hover and click handling
        if is_mouse_over(cur, 1150, 40, 50, 50):
            if sound:
                gameDisplay.blit(soundoffImg, (1150, 40))
            else:
                gameDisplay.blit(soundonImg, (1150, 40))

            if mouse_clicked and click_pos and point_in_rect(click_pos, 1150, 40, 50, 50):
                if sound:
                    sound = False
                    pause_background_music()
                else:
                    sound = True
                    if music_available:
                        resume_background_music()

        # Reset/new game flow:
        # Return "restart" to the outer main loop instead of calling main() recursively.
        if is_mouse_over(cur, 1000, 45, 119, 36):
            gameDisplay.blit(ng1Img, (1000, 20))
            if mouse_clicked and click_pos and point_in_rect(click_pos, 1000, 45, 119, 36):
                restart_requested = True
                continue

        gameDisplay.blit(boatImg, (x, y))  # display boat

        # Valid/invalid state and game over condition:
        # Missionaries are unsafe when cannibals outnumber missionaries on either bank.
        if (state[0] < state[1] and state[0] > 0) or (state[0] > state[1] and state[0] < 3):
            gameDisplay.blit(gameoverImg, (400, 250))
            gameover = True

        # Win condition:
        # Goal state is [0, 0, 0] and the boat has no selected passengers.
        if state == [0, 0, 0] and action == [0, 0]:
            gameDisplay.blit(wonImg, (400, 250))
            won = True

        if not gameover and not won:
            # click and point actions of go button
            if is_mouse_over(cur, 590, 300, 88, 90) and action != [0, 0]:
                gameDisplay.blit(go1Img, (590, 300))
                if mouse_clicked and click_pos and point_in_rect(click_pos, 590, 300, 88, 90):
                    # Boat movement:
                    # Move all passengers currently attached to the boat with the boat.
                    if boat_position == 0:
                        x_change = 10
                        for i in range(6):
                            if mc[i].pos == 2 or mc[i].pos == 4:
                                mc[i].x_change = 10
                    else:
                        x_change = -10
                        for i in range(6):
                            if mc[i].pos == 3 or mc[i].pos == 5:
                                mc[i].x_change = -10
            else:
                gameDisplay.blit(goImg, (590, 300))

            # stopping condition of boat on the right shore
            if x >= 620 and boat_position == 0:
                x_change = 0
                for i in range(6):
                    mc[i].x_change = 0
                boat_position = 1
                moves += 1
                state[0], state[1], state[2] = state[0] - action[0], state[1] - action[1], 0
                for i in range(6):
                    if mc[i].pos == 2:
                        mc[i].pos = 3
                        mc[i].leftright = "right"
                        mc[i].rect_x += 900
                    if mc[i].pos == 4:
                        mc[i].pos = 5
                        mc[i].leftright = "right"
                        mc[i].rect_x += 900

            # stopping condition of boat on the left shore
            if x <= 128 and boat_position == 1:
                x_change = 0
                for i in range(6):
                    mc[i].x_change = 0
                boat_position = 0
                moves += 1
                state[0], state[1], state[2] = state[0] + action[0], state[1] + action[1], 1
                for i in range(6):
                    if mc[i].pos == 3:
                        mc[i].pos = 2
                        mc[i].rect_x -= 900
                        mc[i].leftright = "left"
                    if mc[i].pos == 5:
                        mc[i].pos = 4
                        mc[i].leftright = "left"
                        mc[i].rect_x -= 900

            # if boat is not full
            if action != [1, 1] and action != [0, 2] and action != [2, 0]:
                for i in range(6):
                    # click and point actions of missionary or cannibal at ground
                    if is_mouse_over(cur, mc[i].rect_x, mc[i].rect_y, person.width, person.height):
                        if mc[i].pos == 0 and mc[i].leftright == "left" and boat_position == 0:
                            mc[i].highlight()
                            if mouse_clicked and click_pos and point_in_rect(click_pos, mc[i].rect_x, mc[i].rect_y, person.width, person.height):
                                if mc[i].char == "M":
                                    a += 1
                                elif mc[i].char == "C":
                                    b += 1

                                current_left = any(item.pos == 2 for item in mc)
                                current_right = any(item.pos == 4 for item in mc)

                                if action == [0, 1] or action == [1, 0]:
                                    if current_left:
                                        mc[i].x, mc[i].y = x + 180, y - 50
                                        mc[i].pos = 4
                                        right = True
                                    elif current_right:
                                        mc[i].x, mc[i].y = x + 20, y - 50
                                        mc[i].pos = 2
                                        left = True
                                else:
                                    mc[i].x, mc[i].y = x + 20, y - 50
                                    mc[i].pos = 2
                                    left = True

                        elif mc[i].pos == 1 and mc[i].leftright == "right" and boat_position == 1:
                            mc[i].highlight()
                            if mouse_clicked and click_pos and point_in_rect(click_pos, mc[i].rect_x, mc[i].rect_y, person.width, person.height):
                                if mc[i].char == "M":
                                    a += 1
                                elif mc[i].char == "C":
                                    b += 1

                                current_left = any(item.pos == 3 for item in mc)
                                current_right = any(item.pos == 5 for item in mc)

                                if action == [0, 1] or action == [1, 0]:
                                    if current_left:
                                        mc[i].x, mc[i].y = x + 180, y - 50
                                        mc[i].pos = 5
                                        right = True
                                    elif current_right:
                                        mc[i].x, mc[i].y = x + 20, y - 50
                                        mc[i].pos = 3
                                        left = True
                                else:
                                    mc[i].x, mc[i].y = x + 20, y - 50
                                    mc[i].pos = 3
                                    left = True

            # if any 1 or more person on boat
            if action != [0, 0]:
                for j in range(4):
                    if is_mouse_over(cur, boats[j].x, boats[j].y, boat.width, boat.height):
                        k = 7
                        for i in range(6):
                            if mc[i].pos == boats[j].pos:
                                k = i
                        if k != 7:
                            boats[j].highlight(x, y, mc[k].char)
                            if mouse_clicked and click_pos and point_in_rect(click_pos, boats[j].x, boats[j].y, boat.width, boat.height):
                                if mc[k].char == "M":
                                    a -= 1
                                elif mc[k].char == "C":
                                    b -= 1

                                if mc[k].leftright == "left":
                                    mc[k].x, mc[k].y = mc[k].rect_x - 12, mc[k].rect_y
                                    mc[k].pos = 0
                                elif mc[k].leftright == "right":
                                    mc[k].x, mc[k].y = mc[k].rect_x - 12, mc[k].rect_y
                                    mc[k].pos = 1

                                if boats[j].pos == 2 or boats[j].pos == 3:
                                    left = False
                                elif boats[j].pos == 4 or boats[j].pos == 5:
                                    right = False

            # update boat position for movement
            x = x + x_change

            # update missionary and cannibal position for movement
            for i in range(6):
                mc[i].x += mc[i].x_change

            action = [a, b]

        # actions for gameover
        elif gameover and not gameoverplayed:
            stop_background_music()
            play_sound(gameoversd)
            gameoverplayed = True

        # actions for game won
        elif won and not wonplayed:
            stop_background_music()
            play_sound(wonsd)
            wonplayed = True

        pygame.display.update()
        clock.tick(25)

    stop_background_music()

    if restart_requested:
        return "restart"
    return "quit"


def main():
    # Keep restarting in the same process without recursively calling main().
    while True:
        result = run_game()
        if result != "restart":
            break

    pygame.quit()
    sys.exit()


if __name__ == "__main__":
    main()
