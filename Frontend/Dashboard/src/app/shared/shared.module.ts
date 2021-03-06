import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatDividerModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatListModule,
  MatCardModule
} from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HighchartsChartModule } from "highcharts-angular";
import { RouterModule } from "@angular/router";
import { PieChartComponent } from "./widget/pie-chart/pie-chart.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardComponent } from "./widget/card/card.component";
import { CountTotalAreaComponent } from "./widget/count-total-area/count-total-area.component";
import { MapComponent } from "./widget/map/map.component";
import { ErrorComponent } from './components/error/error.component';
import { UploadFileComponent } from './widget/upload-file/upload-file.component';
import { VideoPlayerComponent } from './widget/video-player/video-player.component';
import { MatVideoModule } from 'mat-video';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';


//import { CodeEditorComponent } from '../pages/code-editor/code-editor.component';





@NgModule({
  declarations: [
    PieChartComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent,
    CountTotalAreaComponent,
    MapComponent,
    ErrorComponent,
    UploadFileComponent,
    VideoPlayerComponent,
   // BlogEditorComponent,

   // CodeEditorComponent,

  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule,
    HighchartsChartModule,
    MatCardModule,
    MatVideoModule,
    CKEditorModule
  ],
  exports: [
    PieChartComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    CardComponent,
    CountTotalAreaComponent,
    MapComponent,
    UploadFileComponent,
    VideoPlayerComponent,
    //CodeEditorComponent

  ]
})
export class SharedModule {}
