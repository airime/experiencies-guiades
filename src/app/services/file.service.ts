import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface File {
  name: string;
  description: string;
  url: string;
  duration: string;
}

@Injectable({
  providedIn: 'root'
})
export class FileService {

  filesCat: File[] = [
    { url: '../../assets/cat/EL DESCENS.mp3',
      name: 'El descens',
      description: 'EL DESCENS (Mario Rodríguez Cobos) (8:00)\nNarració: Evelyn Arévalo (febrer 2016)\nAmbientació musical: Xavier Batllés (octubre 2023)',
      duration: '8:00'
    },
    { url: '../../assets/cat/EL GRAN ERROR.mp3',
      name: 'El gran error',
      description: 'EL GRAN ERROR (Mario Rodríguez Cobos) (17:10)\nNarració: Ricard Domínguez (juliol 2015)\nAmbientació musical: Xavier Batllés (octubre 2023)',
      duration: '17:10'
    },
    { url: '../../assets/cat/EL MINER.mp3',
      name: 'El miner',
      description: 'EL MINER (Mario Rodríguez Cobos) (12:07)\nNarració: Carles Martin (2024)\nAmbientació musical: Xavier Batllés (2024)',
      duration: '12:07'
    },
    { url: '../../assets/cat/EL RESSENTIMENT.mp3',
      name: 'El ressentiment',
      description: 'EL RESSENTIMENT (Mario Rodríguez Cobos) (12:25)\nNarració: David Prendergast (març 2016)\nAmbientació musical: Xavier Batllés (novembre 2023)',
      duration: '12:25'
    },
    { url: '../../assets/cat/EL VIATGE.mp3',
      name: 'El viatge',
      description: 'EL VIATGE (Mario Rodríguez Cobos) (10:14)\nNarració: Dolors Griera (juny 2015)\nAmbientació musical: Xavier Batllés (octubre 2023)',
      duration: '10:14'
    },
    { url: '../../assets/cat/ELS NÚVOLS.mp3',
      name: 'Els núvols',
      description: 'ELS NÚVOLS (Mario Rodríguez Cobos) (10:00)\nNarració: Heura Gaya (juliol 2015)\nAmbientació musical: Xavier Batllés (desembre 2023)',
      duration: '10:00'
    },
    { url: '../../assets/cat/L_ANIMAL.mp3',
      name: 'L’animal',
      description: 'L’ANIMAL (Mario Rodríguez Cobos) (11:42)\nNarració: Emma Oliveras (juliol 2015)\nAmbientació musical: Xavier Batllés (desembre 2023)',
      duration: '11:42'
    },
    { url: '../../assets/cat/L_ENEMIC.mp3',
      name: 'L’enemic',
      description: 'L’ENEMIC (Mario Rodríguez Cobos) (9:33)\nNarració: Marisa Ferreres (octubre 2016)\nAmbientació musical: Xavier Batllés (desembre 2023)',
      duration: '9:33'
    },
    { url: '../../assets/cat/L_ESCURA_XEMENEIES.mp3',
      name: 'L’escura-xemeneies',
      description: 'L’ESCURA-XEMENEIES (Mario Rodríguez Cobos) (7:29)\nNarració: Arnau Vilardebò (gener 2024)\nAmbientació musical: Xavier Batllés (març 2024)',
      duration: '7:29'
    },
    { url: '../../assets/cat/L_INFANT.mp3',
      name: 'L’infant',
      description: 'L’INFANT (Mario Rodríguez Cobos) (9:11)\nNarració: Mercè Duch (setembre 2007)\nAmbientació musical: Xavier Batllés (setembre 2023)',
      duration: '9:11'
    },
    { url: '../../assets/cat/LA MORT.mp3',
      name: 'La mort',
      description: 'LA MORT (Mario Rodríguez Cobos) (15:06)\nNarració: Anna Oliva (juny 2015)\nAmbientació musical: Xavier Batllés (octubre 2023)',
      duration: '15:06'
    },
    { url: '../../assets/cat/LA PARELLA IDEAL.mp3',
      name: 'La parella ideal',
      description: 'LA PARELLA IDEAL (Mario Rodríguez Cobos) (14:45)\nNarració: Pep Tosar (febrer 2016)\nAmbientació musical: Xavier Batllés (desembre 2023)',
      duration: '14:45'
    },
    { url: '../../assets/cat/LA REPETICIÓ.mp3',
      name: 'La repetició',
      description: 'LA REPETICIÓ (Mario Rodríguez Cobos) (11:48)\nNarració: Maite Golmayo (setembre 2016)\nAmbientació musical: Xavier Batllés (desembre 2023)',
      duration: '11:48'
    },
    { url: '../../assets/cat/LES DISFRESSES.mp3',
      name: 'Les disfresses',
      description: 'LES DISFRESSES (Mario Rodríguez Cobos) (8:35)\nNarració: Manel Joseph (març 2016)\nAmbientació musical: Xavier Batllés (octubre 2023)',
      duration: '8:35'
    },
    { url: '../../assets/cat/LES FALSES ESPERANCES.mp3',
      name: 'Les falses esperances',
      description: 'LES FALSES ESPERANCES (Mario Rodríguez Cobos) (14:33)\nNarració: Xavier Carles (gener 2024)\nAmbientació musical: Xavier Batllés (gener 2024)',
      duration: '14:33'
    },
    { url: '../../assets/cat/LO FESTIVAL.mp3',
      name: 'Lo festival',
      description: 'LO FESTIVAL (Mario Rodríguez Cobos) (13:16)\nNarració: Arturo Gaya (gener 2024)\nAmbientació musical: Xavier Batllés (gener 2024)',
      duration: '13:16'
    },
    { url: '../../assets/cat/Experiencia de Pau i passatge de la Força.mp3',
      name: 'Experiència de Pau i passatge de la Força',
      description: 'EXPERIÈNCIA DE PAU I PASSATGE DE LA FORÇA (Mario Rodríguez Cobos) (3:36)\nNarració: Xavier Batllés (març 2020)',
      duration: '3:36'
    },
    { url: '../../assets/cat/Relax complet.mp3',
      name: 'Rélax complet',
      description: 'RÉLAX COMPLET (Mario Rodríguez Cobos) (5:04)\nNarració: Xavier Batllés (març 2020)',
      duration: '5:04'
    },
  ];

  filesCast: File[] = [
    { url: '../../assets/cast/AVANCES Y RETROCESOS.mp3',
      name: 'Avances y retrocesos',
      description: 'AVANCES Y RETROCESOS (Mario Rodríguez Cobos) (7:57)\nNarración: Juana Pérez (septiembre 2013)\nAmbientación musical: Xavier Batllés (noviembre 2023)',
      duration: '7:57'
    },
    { url: '../../assets/cast/CONFIGURACIÓN DEL GUÍA INTERNO.mp3',
      name: 'Configuración del guía interno',
      description: 'CONFIGURACIÓN DEL GUÍA INTERNO (Mario Rodríguez Cobos) (9:55)\nNarración: Esther Bass (mayo 2023)\nAmbientación musical: Xavier Batllés (mayo 2023)',
      duration: '9:55'
    },
    { url: '../../assets/cast/EL ANIMAL.mp3',
      name: 'El animal',
      description: 'EL ANIMAL (Mario Rodríguez Cobos) (11:42)\nNarración: Esther Bass (diciembre 2023)\nAmbientación musical: Xavier Batllés (diciembre 2023)',
      duration: '11:42'
    },
    { url: '../../assets/cast/EL DESCENSO.mp3',
      name: 'El descenso',
      description: 'EL DESCENSO (Mario Rodríguez Cobos) (8:00)\nNarración: Juana Pérez (septiembre 2013)\nAmbientación musical: Xavier Batllés (octubre 2023)',
      duration: '8:00'
    },
    { url: '../../assets/cast/EL DESHOLLINADOR.mp3',
      name: 'El deshollinador',
      description: 'EL DESOLLINADOR (Mario Rodríguez Cobos) (7:29)\nNarración: Enrique Collado (marzo 2024)\nAmbientación musical: Xavier Batllés (marzo 2024)',
      duration: '7:29'
    },
    { url: '../../assets/cast/EL ENEMIGO.mp3',
      name: 'El enemigo',
      description: 'EL ENEMIGO (Mario Rodríguez Cobos) (9:33)\nNarración: Esther Bass (diciembre 2023)\nAmbientación musical: Xavier Batllés (diciembre 2023)',
      duration: '9:33'
    },
    { url: '../../assets/cast/EL FESTIVAL.mp3',
      name: 'El festival',
      description: 'EL FESTIVAL (Mario Rodríguez Cobos) (13:16)\nNarración: Xavier Carles (enero 2024)\nAmbientación musical: Xavier Batllés (enero 2024)',
      duration: '13:16'
    },
    { url: '../../assets/cast/EL GRAN ERROR.mp3',
      name: 'El gran error',
      description: 'EL GRAN ERROR (Mario Rodríguez Cobos) (17:10)\nNarración: Juana Pérez, Álvaro Orús y Lali Mariscal (enero 2013)\nAmbientación musical: Xavier Batllés (octubre 2023)',
      duration: '17:10'
    },
    { url: '../../assets/cast/EL MINERO.mp3',
      name: 'El minero',
      description: 'EL MINERO (Mario Rodríguez Cobos) (12:07)\nNarración: Montse Valero (2024)\nAmbientación musical: Xavier Batllés (2024)',
      duration: '12:07'
    },
    { url: '../../assets/cast/EL NIÑO.mp3',
      name: 'El niño',
      description: 'EL NIÑO (Mario Rodríguez Cobos) (9:11)\nNarración: Mercè Duch (septiembre 2007)\nAmbientación musical: Xavier Batllés (septiembre 2023)',
      duration: '9:11'
    },
    { url: '../../assets/cast/EL RESENTIMIENTO.mp3',
      name: 'El resentimiento',
      description: 'EL RESENTIMIENTO (Mario Rodríguez Cobos) (12:25)\nNarración: Esther Bass (noviembre 2023)\nAmbientación musical: Xavier Batllés (novembre 2023)',
      duration: '12:25'
    },
    { url: '../../assets/cast/EL VIAJE.mp3',
      name: 'El viaje',
      description: 'EL VIAJE (Mario Rodríguez Cobos) (10:14)\nNarración: Esther Bass (octubre 2023)\nAmbientación musical: Xavier Batllés (octubre 2023)',
      duration: '10:14'
    },
    { url: '../../assets/cast/LA ACCIÓN SALVADORA.mp3',
      name: 'La acción salvadora',
      description: 'LA ACCIÓN SALVADORA (Mario Rodríguez Cobos) (14:21)\nNarración: Esther Bass (mayo 2023)\nAmbientación musical: Xavier Batllés (mayo 2023)',
      duration: '14:21'
    },
    { url: '../../assets/cast/LA MUERTE.mp3',
      name: 'La muerte',
      description: 'LA MUERTE (Mario Rodríguez Cobos) (15:06)\nNarración: Lola Blanco y Juanma Navas (diciembre 2012)\nAmbientación musical: Xavier Batllés (octubre 2023)',
      duration: '15:06'
    },
    { url: '../../assets/cast/LA PAREJA IDEAL.mp3',
      name: 'La pareja ideal',
      description: 'LA PAREJA IDEAL (Mario Rodríguez Cobos) (14:45)\nNarración: Esther Bass (diciembre 2023)\nAmbientación musical: Xavier Batllés (diciembre 2023)',
      duration: '14:45'
    },
    { url: '../../assets/cast/LA REPETICIÓN.mp3',
      name: 'La repetición',
      description: 'LA REPETICIÓN (Mario Rodríguez Cobos) (11:48)\nNarración: Esther Bass (noviembre 2023)\nAmbientación musical: Xavier Batllés (diciembre 2023)',
      duration: '11:48'
    },
    { url: '../../assets/cast/LAS FALSAS ESPERANZAS.mp3',
      name: 'Las falsas esperanzas',
      description: 'LAS FALSAS ESPERANZAS (Mario Rodríguez Cobos) (14:33)\nNarración: Xavier Carles (enero 2024)\Ambientación musical: Xavier Batllés (enero 2024)',
      duration: '14:33'
    },
    { url: '../../assets/cast/LAS NUBES.mp3',
      name: 'Las nubes',
      description: 'LAS NUBES (Mario Rodríguez Cobos) (10:00)\nNarración: Esther Bass (diciembre 2023)\nAmbientación musical: Xavier Batllés (diciembre 2023)',
      duration: '10:00'
    },
    { url: '../../assets/cast/LOS DISFRACES.mp3',
      name: 'Los disfraces',
      description: 'LOS DISFRACES (Mario Rodríguez Cobos) (8:35)\nNarración: Laly Mariscal (septiembre 2013)\nAmbientación musical: Xavier Batllés (octubre 2023)',
      duration: '8:35'
    },
  ];

  getFiles(lang: string) {
    return of(lang === 'cat' ? this.filesCat : this.filesCast);
  }

}
