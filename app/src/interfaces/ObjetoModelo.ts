import Comparavel from "./Comparavel";
import Imprimivel from "./Imprimivel";

export interface ObjetoModelo<T> extends Comparavel<T>, Imprimivel{

}