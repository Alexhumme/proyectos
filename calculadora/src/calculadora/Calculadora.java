package calculadora;

import javax.swing.JOptionPane;


public class Calculadora {

    public static void main(String[] args) {
        
        int opcion,suma,resta,multiplicacion,n1,n2; float division;
        
        
        
        do {
            opcion = Integer.parseInt(JOptionPane.showInputDialog("MENU DE OPCIONES - Alex Valdelamar \n"
                +"1. Suma \n"
                +"2. Resta \n"
                +"3. multiplicacion \n"
                +"4. division \n"
                +"0. Salir \n"
            ));

            switch (opcion){
                case 1:{
                    n1 = Integer.parseInt(JOptionPane.showInputDialog("digite primer numero"));
                    n2 = Integer.parseInt(JOptionPane.showInputDialog("digite segundo numero"));
                    suma = n1+n2;
                    JOptionPane.showMessageDialog(null, "la suma es: "+suma);
                    break;
                }
                case 2: {
                    n1 = Integer.parseInt(JOptionPane.showInputDialog("digite primer numero"));
                    n2 = Integer.parseInt(JOptionPane.showInputDialog("digite segundo numero"));
                    resta = n1-n2;
                    JOptionPane.showMessageDialog(null, "la resta es: "+resta);
                    break;
                }
                case 3: {
                    n1 = Integer.parseInt(JOptionPane.showInputDialog("digite primer numero"));
                    n2 = Integer.parseInt(JOptionPane.showInputDialog("digite segundo numero"));
                    multiplicacion = n1*n2;
                    JOptionPane.showMessageDialog(null, "la multiplicacion es: "+multiplicacion);
                    break;
                }
                case 4: {
                    n1 = Integer.parseInt(JOptionPane.showInputDialog("digite primer numero"));
                    n2 = Integer.parseInt(JOptionPane.showInputDialog("digite segundo numero"));
                    division = n1/n2;
                    JOptionPane.showMessageDialog(null, "la division es: "+division);
                    break;
                }
                case 0: 
                    System.exit(0);
                    break;
                default: JOptionPane.showMessageDialog(null,"esa no es una opcion disponible");
            }
        } while (opcion != 0);
            
    }
    
}
