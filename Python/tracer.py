import pyautogui
import time

print("Move your mouse around. Press Ctrl+C to stop.\n")

try:
    while True:
        x, y = pyautogui.position()  # get current mouse position
        position_str = f"X: {x} Y: {y}"
        print(position_str, end="\r")  # print on same line
        time.sleep(0.2)  # update every 0.2s
except KeyboardInterrupt:
    print("\nStopped.")
