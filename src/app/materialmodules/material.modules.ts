import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgModule } from '@angular/core';

@NgModule({
    exports: [
        MatPaginatorModule,
        MatSelectModule,
        MatInputModule,
        MatSnackBarModule,
        MatFormFieldModule,
        MatCardModule,
        MatListModule,
        MatSidenavModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatGridListModule,
        MatButtonModule,
        MatTableModule,
        MatProgressSpinnerModule,
        MatToolbarModule,
        MatSortModule,
        MatDialogModule,
        MatProgressBarModule,
    ],
})
export class MaterialModules {

}