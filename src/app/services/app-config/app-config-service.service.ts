import { Injectable } from '@angular/core';
import { spotifyApiConfig } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AppConfigServiceService {

  private appConfig:any;
  constructor() { }

  loadConfig(){
    return spotifyApiConfig;
  }

  loadVerdades(){
    let preguntas = new Array();
    preguntas.push("¿Cómo te sentirías si pillas a tu pareja dándose autoplacer?");
    preguntas.push("¿Cuál es tu mayor secreto?");
    preguntas.push("Si pudieras cambiar una cosa en tu cuerpo, ¿cuál sería?");
    preguntas.push("Si tuvieras la oportunidad de salir en una cita con alguien que está presente, ¿quién sería?");
    preguntas.push("Si pudieras tener sexo con un/a famoso/a, ¿quién sería?");
    preguntas.push("¿Cuál ha sido el peor día de tu vida?");
    preguntas.push("¿Cuál es tu fantasía sexual más deseada?");
    preguntas.push("¿Qué es lo más loco que has hecho por un chico o una chica?");
    preguntas.push("¿Cómo fue tu primera experiencia sexual?");
    preguntas.push(" ¿Con cuántas personas te has acostado?");
    preguntas.push("¿Te arrepientes de algo en esta vida?");
    preguntas.push("¿Qué es lo más estúpido que has hecho nunca?");
    preguntas.push("¿Qué es lo que la mayoría de gente piensa de ti y es totalmente falso?");
    preguntas.push("¿Cuál es la cosa más infantil que todavía haces?");
    preguntas.push("¿Dejarías a tu pareja si te ofrecieran 1 millón de euros?");
    preguntas.push("¿Cómo fue tu primer beso?");
    preguntas.push(" ¿Alguna vez has engañado a alguien?");
    preguntas.push("¿Has humillado a alguien alguna vez?");
    preguntas.push("Si te perdieras en una isla desierta, ¿te llevarías a tu pareja o a un amigo?");
    preguntas.push("¿Cuál es la cosa más embarazosa que tus padres te han pillado haciendo?");
    preguntas.push("Si pudieras cambiar de lugar con alguien por un día, ¿quién sería?");
    preguntas.push("¿Has ido a alguna playa nudista?");
    preguntas.push("¿Te gusta alguien ahora mismo? (Si la persona está soltera)");
    preguntas.push("Describe el sueño más erótico que hayas tenido alguna vez");
    preguntas.push("¿Te gusta tu trabajo? ¿Por qué?");
    preguntas.push("¿Cuál ha sido tu mejor experiencia sexual?");
    preguntas.push("¿Cuál ha sido tu peor experiencia sexual?");
    preguntas.push("¿Cuál fue la primera impresión que tuviste de tu pareja?");
    preguntas.push("¿Cuál es el hábito más molesto de tu pareja?");
    preguntas.push("Si pudieras cambiar algo en tu pareja ¿qué sería?");
    preguntas.push("¿Has hecho un trío?");
    preguntas.push("¿Harías un trío?");
    preguntas.push("¿Has tenido alguna cita que haya salido mal?");
    preguntas.push("¿Qué es lo que más te excita?");
    preguntas.push("¿Has hecho algo de lo que te arrepientes después de haber consumido alcohol?");
    preguntas.push("¿Te han humillado alguna vez? ¿Qué sentiste?");
    preguntas.push("¿Has sentido atracción por algún amigo/a de tu pareja actual o anteriores?");
    preguntas.push("¿Qué es lo más loco que has hecho en la vida?");
    preguntas.push("¿Has confesado un secreto a alguien en confianza y éste lo ha contado? ¿Qué era?");
    preguntas.push("¿Has mentido a alguien para no herir sus sentimientos?");
    preguntas.push("¿Tus padres te han pillado dándote autoplacer?");
    preguntas.push("¿Cuál es tu mayor miedo?");
    preguntas.push("¿Cuál fue el motivo de tu última ruptura de pareja?");
    preguntas.push(" ¿Qué harías si fueras del sexo opuesto durante un mes?");
    preguntas.push("¿Alguna vez has sido infiel?");
    preguntas.push(" Si ves accidentalmente una una persona del sexo opuesto desnuda y no lo sabe, ¿seguirías mirando?");
    preguntas.push("¿Te gusta practicar las relaciones íntimas en lugares poco habituales?");
    preguntas.push("¿Cuál es el mayor rechazo que has tenido en el amor?");
    preguntas.push(" ¿Qué cosa es la más bizarra que has hecho estando solo?");
    preguntas.push("¿Algún conocido de te ha pillado desnudo/a?");
    preguntas.push("¿Tendrías sexo con alguien de aquí?");
    preguntas.push("¿Has tenido alguna pareja de nacionalidad distinta a la tuya?");
    preguntas.push("¿Te has acostado con alguien poco atractivo alguna vez?");
    preguntas.push("¿Alguna vez te has enrollado con varias personas en una misma noche?");
    preguntas.push("De los amigos presentes hoy, ¿quién es el que tiene más sex-appeal?");
    preguntas.push("¿Has entado alguna vez en un 'cuarto oscuro'?");
    preguntas.push("¿Cuál es tu sitio favorito para tener relaciones?");
    preguntas.push("¿Tienes algún fetiche inconfesable? ¿Cuál es?");
    preguntas.push("Imagina que tienes el superpoder, durante una noche, de meter en tu cama a quien tú quieras. ¿Quién sería?");
    preguntas.push("¿Hay algún uniforme que te excite especialmente?");
    preguntas.push("¿Has tenido conversaciones subidas de tono por chat o WhatsApp?");
    preguntas.push("¿Qué edad tenía la persona más mayor de las que has tenido relaciones?");
    preguntas.push("¿Qué edad tenía la persona más joven de las que has tenido relaciones?");
    preguntas.push("¿Qué cualidad física te hace caer rendido/a a los pies de alguien?");
    preguntas.push("¿Sientes o has sentido atracción física por algún familiar lejano?");
    preguntas.push("¿Cuál es el sitio más extraño en que has conocido a una persona con la que terminaste saliendo?");
    preguntas.push("Si algún día te casas, ¿dónde te gustaría que fuera la ceremonia?");
    preguntas.push("¿Qué es lo más loco que has hecho para intentar gustar a alguien?");
    preguntas.push("En una pareja estable, qué cualidad prefieres: ¿conexión física o conexión intelectual?");

    return preguntas;
  }


  loadRetos(){
    let retos = new Array();
    retos.push("Terminate tu copa");
    retos.push("Escribele a tu madre por WhatsApp 'ya compramos la coca'");
    retos.push("Haz twerk");
    retos.push("")
  }
}
