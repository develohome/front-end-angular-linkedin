import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-sm pb-0 mb-0">
      <div class="container ">
        <a class="navbar-brand ">
           <i class="fa fa-linkedin"></i>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse " id="mynavbar">
          <form class="d-flex">
            <div class="input-group">
              <span class="input-group-text">
                <i class="fa fa-search" style="font-size:15px;"></i>
              </span>
              <input type="text" class="form-control" placeholder="Pesquisar">
            </div>
            
          </form>
          <ul class="navbar-nav ms-auto">
            @for (item of nav; track $index) {
              <li class="nav-item">
                <a class="nav-link d-flex flex-column justify-content-center align-items-center" routerLinkActive="active" routerLink="{{item.link}}">
                  <i class="fa {{item.icon}}" style="font-size: 25px;"></i>
                  <p class="p-0 m-0">{{item.title}}</p>
                </a>
              </li>
            }
            <li class="nav-item" style="padding-top: 6px;">
              <div class="my-photo">

              </div>
              <div class="dropdown">
                <p style="font-size:12px;" class="dropdown-toggle" data-bs-toggle="dropdown">
                  Eu
                </p>
                <ul class="dropdown-menu">
                  <li>
                    <div class="row">
                      <div class="col-4">

                      </div>
                      <div class="col-8">
                        <div class="row">
                          <div class="col-12">
                            <h6>{{name}}</h6>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><a class="dropdown-item" href="#">Link 2</a></li>
                  <li><a class="dropdown-item" href="#">Link 3</a></li>
                </ul>
              </div>
            </li>
          </ul>
          <ul class="navbar-nav border-start">
            <li class="nav-item">
              <p class="p-0 m-0">Para negócios</p>
            </li>
            <li class="nav-item">
              <p class="p-0 m-0">Lerning</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `,
  styles: `
    nav{
      background:var(--branco);
    }
    .my-photo{
      width:25px;
      height:25px;
      background:var(--cinza);
      border-radius:50%;
    }
    .fa-linkedin{
      font-size:25px;
        border-radius: 5px;
        padding: 5px 10px;
        background: #0A66C2;
        color: #fff;
    }
    input{
      background:var(--cinza);
    }
    a p{
      font-size:12px;
    }
    li a{
      padding:5px 15px !important;
    }
    .active{
      border-bottom:3px solid #000;
    }
  `
})
export class HeaderComponent {
  name:String = "Alex dos santos silva"
  nav:any[] = [
    {
      icon:"fa-home",
      title:"Início",
      link:"home"
    },
    {
      icon:"fa-group",
      title:"Minha rede",
      link:"minharede"
    },
    {
      icon:"fa-briefcase",
      title:"Vagas",
      link:"vagas"
    },
    {
      icon:"fa-commenting",
      title:"Mensagens",
      link:"mensagens"
    },
    {
      icon:"fa-bell",
      title:"Notificações",
      link:"notificacoes"
    }
  ]
}
