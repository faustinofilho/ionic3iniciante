import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoovieProvider } from "../../providers/moovie/moovie";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
  providers: [
    MoovieProvider
  ]
})
export class AboutPage {

  public  objeto_feed = {
    titulo: 'Faustino Tavares',
    data: 'November 5, 1955',
    descricao: 'descrição', 
    quant_like: 10,
     quant_comments: 10,
    time_comment: '11H ago'
  }

  /**
   * Declara que é um tipo qualquer coisa
   * que no array pode vir todo tipo de registro
   * 
   * e dar para retornar de tudo
   */
  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController,
    private movieProvider: MoovieProvider
  ) {

  }


   ionViewDidLoad() {
    this.movieProvider.getLatesMoovies().subscribe(
      data=>{
        //Assim é chamado cat de valor e transforma para qualquer coisa
        const response = (data as any);
        // Coverte para json
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results
        console.log(objeto_retorno);
      },
      error => {
        console.log(error);
      }
    );
  }

}
