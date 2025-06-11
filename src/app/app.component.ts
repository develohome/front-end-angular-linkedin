import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layout/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent],
  template: `
    <app-header/>
    <div class="container py-2">
      <div class="row">
      <div class="col-2">
        <div class="card">
          <div class="card-body"></div>
        </div>
      </div>
      <div class="col-7">
        <div class="card">
          <div class="card-body">
            <router-outlet />
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card">
          <div class="card-body"></div>
        </div>
      </div>
    </div>
      
    </div>
    
  `,
  styles: [],
})
export class AppComponent {
  title = 'linkedin';
}
