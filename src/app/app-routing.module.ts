import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { DashbordComponent } from './admin/dashbord/dashbord.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path:'',component:MainLayoutComponent,children:[

    {path:'',component:HomeComponent},
    {path:'anasayfa',component:HomeComponent},
    
   
    {path:'iletisim',component:ContactComponent}
  ]},
   {path:'admin',component:AdminLayoutComponent,children:[

   
    {path:'ziyaretci',component:DashbordComponent}
  ]}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
