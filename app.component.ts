import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CustomDirective';
       
       
         public message: string = 'Sample Demostration of Attribute Directives using Custom Directives';
         public color: string = 'blue';
      
}
