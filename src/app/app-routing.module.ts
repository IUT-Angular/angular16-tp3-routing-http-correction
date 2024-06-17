import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookDetailComponent } from './components/book-detail/book-detail.component';
import { BookFormComponent } from './components/book-form/book-form.component';
import { BookListComponent } from './components/book-list/book-list.component';

export const appRouteList: Routes = [
    {
        path: '',
        redirectTo: '/books', //permet la reedirection vers la page /books
        pathMatch: 'full'
    },
    {
        path: 'books',
        component: BookListComponent
    },
    {
        path: 'book/add',
        component: BookFormComponent
    },
    {
        path: 'book/:id',
        component: BookDetailComponent
    }
];

@NgModule({
    exports: [
        RouterModule
    ],
    imports: [
        RouterModule.forRoot(appRouteList)
    ]
})
export class AppRoutingModule {
}