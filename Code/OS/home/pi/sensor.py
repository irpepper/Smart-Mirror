import RPI.GPIO as GPIO
import pyautogui

pirPin = 16

while 0:

    GPIO.setmode(GPIO.BCM)
    GPIO.setup(pirPin, GPIO.IN)
    value = GPIO.input(pirPin)
    if value = True:
        pyautogui.move(0,1)
        pyautogui.move(0,-1)
        print "This shit works yo"
