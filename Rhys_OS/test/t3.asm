org 0x7c00 ;offset

jmp $

times 510 - ($-$$) db 0 ; 3bytes from previous line + 510 bytes - 3 bytes = 510bytes
db 0x55, 0xaa ; last 2 bytes of the boot sector