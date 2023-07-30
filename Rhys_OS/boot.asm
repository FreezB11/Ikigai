org 0x7c00 ;offset

mov ah, 0x0e ; tty mode 
mov bx, name


print:
    mov al, [bx]
    cmp al, 0
    je end
    int 0x10
    inc bx 
    jmp print

end:
    jmp $

name:
    db "Hello", 0







;mov ah, 0x0e            ; |--> uses loop to print alphabets                                 
;mov al, 'A'             ; |--> uses loop to print alphabets                   
;int 0x10                ; |--> uses loop to print alphabets                
                         ; |--> uses loop to print alphabets       
; loop:                  ; |--> uses loop to print alphabets              
;     inc al             ; |--> uses loop to print alphabets                   
;     cmp al,'Z'+1       ; |--> uses loop to print alphabets                         
;     je exit            ; |--> uses loop to print alphabets                    
;     int 0x10           ; |--> uses loop to print alphabets                     
;     jmp loop           ; |--> uses loop to print alphabets                     
                         ; |--> uses loop to print alphabets       
; exit:                  ; |--> uses loop to print alphabets              
;     jmp $              ; |--> uses loop to print alphabets                  

;mov ah, 00h                ; |-->video interupt
;mov al, 13h                ; |-->video interupt
;int 10h                    ; |-->video interupt        
 
; jmp $ ; 3 bytes

times 510 - ($-$$) db 0 ; 3bytes from previous line + 510 bytes - 3 bytes = 510bytes
db 0x55, 0xaa ; last 2 bytes of the boot sector