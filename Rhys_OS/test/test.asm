org 100h
start:

mov ax,13 	; mode = 13h 
int 10h 	; call bios service

mov ah,0Ch 	; function 0Ch
mov al,4 	; color 4 - red
mov cx,160 	; x position = 160
mov dx,100 	; y position = 100
int 10h 	; call BIOS service

inc dx 		; plot pixel downwards
int 10h 	; call BIOS service
inc cx 		; plot pixel to right
int 10h 	; call BIOS service
dec dx 		; plot pixel up
int 10h 	; call BIOS service

xor ax,ax 	; function 00h - get a key
int 16h 	; call BIOS service

mov ax,3 	; mode = 3
int 10h 	; call BIOS service

mov ax,4C00h 	; exit to DOS
int 21h
