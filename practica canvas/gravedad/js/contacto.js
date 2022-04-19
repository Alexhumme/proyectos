function casoContacto(char){
    for (pared of bloques){
        
            if (char.y > pared.y && char.y < pared.y+pared.alto)
            {
                if (char.x+char.ancho > pared.x && char.x+char.ancho < pared.x+pared.ancho && char.x-char.ancho < pared.x){char.contacto(pared, "left")}
                if (char.x-char.ancho < pared.x+pared.ancho && char.x-char.ancho > pared.x && char.x+char.ancho > pared.x+pared.ancho){char.contacto(pared, "right")}
            }
            if (char.x+char.ancho > pared.x && char.x-char.ancho < pared.x+pared.ancho)
            {
                if (char.y+char.alto > pared.y && char.y+char.alto < pared.y+pared.alto && char.y-char.alto < pared.y){char.contacto(pared, "up")}
                if (char.y-char.alto < pared.y+pared.alto && char.y-char.alto > pared.y && char.y+char.alto > pared.y+pared.alto){char.contacto(pared, "down")}
            } 
        
    }
}