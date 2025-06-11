import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar navbar-expand-sm" style="padding:0 !important;" >
      <div class="container">
        <a class="navbar-brand ">
           <i class="fa fa-linkedin"></i>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <form class="d-flex">
            <div class="input-group">
              <span class="input-group-text">
                <i class="fa fa-search" style="font-size:15px;"></i>
              </span>
              <input type="text" class="form-control" placeholder="Pesquisar">
            </div>
          </form>
          <ul class="navbar-nav ms-auto d-flex align-items-center">
            @for (item of nav; track $index) {
              <li class="nav-item">
                <a class="nav-link d-flex flex-column justify-content-center align-items-center" routerLinkActive="active" routerLink="{{item.link}}">
                  <i class="fa {{item.icon}}" style="font-size: 25px;"></i>
                  <p class="p-0 m-0">{{item.title}}</p>
                </a>
              </li>
            }
            <li class="nav-item px-3  border-end">
              <div class="my-photo">

              </div>
              <div class="dropdown py-0">
                <p style="font-size:12px;" class="dropdown-toggle p-0 m-0" data-bs-toggle="dropdown">
                  Eu
                </p>
                <ul class="dropdown-menu px-2" style="margin-top:10px;width:300px;">
                  <li class="border-bottom">
                    <div class="row">
                      <div class="col-4 d-flex justify-content-center">
                        <div class="photo-My">

                        </div>
                      </div>
                      <div class="col-8">
                        <div class="row">
                          <div class="col-12">
                            <h6>{{name}}</h6>
                          </div>
                        </div>
                        <div class="row">
                          <div class="col-12">
                            <p class="p-0 m-0" style="font-size: 13px;">
                              Desenvolvedor Fullstack | Angular | TypeScript | NodeJS
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="row  py-3 ">
                      <div class="col-12">
                        <button type="button" class="btn btn-outline-primary w-100">Ver perfil</button>
                      </div>
                    </div>
                  </li>
                  <li  class="border-bottom pt-2">
                    <h6>Conta</h6>
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <a class="nav-link m-0 linkDropdown" href="#">Configurações e privacidade</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link m-0 linkDropdown"  href="#">Ajuda</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link linkDropdown"  href="#">Idioma</a>
                      </li>
                    </ul>
                  </li>
                  <li  class="border-bottom pt-2">
                    <h6>Gerenciar</h6>
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <a class="nav-link linkDropdown"  href="#">Publicações e atividades</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link linkDropdown" href="#">Conta de anúncio de vagas</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <ul class="nav flex-column">
                      <li class="nav-item">
                        <a class="nav-link linkDropdown"  href="#">Sair</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-item px-3">
              <div class="dropdown py-0 d-flex flex-column justify-content-center align-items-center">
                <i class="fa fa-th" style="font-size: 25px;"></i>
                
                <p style="font-size:12px;" class="dropdown-toggle p-0 m-0" data-bs-toggle="dropdown">
                  Para Negócios
                </p>
                <ul class="dropdown-menu py-0">
                  <li >
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
            <li class="nav-item">
              <a class="nav-link d-flex flex-column justify-content-center align-items-center">
                <i class="fa fa-play" style="font-size: 25px;"></i>
                <p class="p-0 m-0">Learning</p>
              </a>
              
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
    .linkDropdown{
      font-size:13px;
      color:#666666;
      padding:5px 0px;
      margin:0px;
    }
    input{
      background:var(--cinza);
    }
    a p{
      font-size:12px;
    }
    .active{
      border-bottom:3px solid #000;
    }
    .photo-My{
      width:70px;
      height:70px;
      border-radius:50%;
      background:var(--cinza);
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
