import { Routes } from '@angular/router';
import { ProductListComponent } from './pages/admin/products/list/list.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { HomeComponent } from './home/product-list/product-list.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';
import { ClienLayoutsComponent } from './layouts/clien-layouts/clien-layouts.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProductComponent } from './components/productlist/product.component';
import { ProductCreateComponent } from './pages/admin/products/create/create.component';
import { ProductUpdateComponent } from './pages/admin/products/update/update.component';

export const routes: Routes = [
  { path: 'admin',component: AdminLayoutComponent, children: [{ path: 'products/list', component: ProductListComponent },{ path: 'products/create', component: ProductCreateComponent },]}
  ,
  {path: '',component: HomeComponent},
  {path: '', component: ClienLayoutsComponent, children: [{path: 'products/:id', component: ProductDetailComponent}]},
  { path: 'admin/products/update/:id', component: ProductUpdateComponent },
  { path: '1', component: ProductComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component:NotFoundPageComponent}
];
