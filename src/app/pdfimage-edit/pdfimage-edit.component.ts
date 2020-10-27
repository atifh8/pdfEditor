import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import * as data from '../../config/flexiContent.json';
import { ShowContentDialogComponent } from '../show-content-dialog/show-content-dialog.component';

declare var tinymce: any;

@Component({
  selector: 'app-pdfimage-edit',
  templateUrl: './pdfimage-edit.component.html',
  styleUrls: ['./pdfimage-edit.component.css']
})
export class PDFImageEditComponent implements OnInit {
  flexicontentinfo = data;
  mapCooridinate = [];
  image: any;
  loadingImage = false;
  openingTinyMce = false;
  updateContentOfTinymce: string;
  OriginalContentOfTinymce: string;
  mapHigtlightConfig = {
    alwaysOn: true,
    neverOn: false,
    fill: true,
    fillColor: '#87CEEB',
    fillOpacity: 0.4,
    stroke: true,
    strokeColor: '#FFFFFF',
    strokeWidth: 2,
    shadow: true,
    shadowColor: '#000000',
    shadowOpacity: 0.8,
    shadowRadius: 10,
  };

  constructor(private router: Router, public dialog: MatDialog) {
    this.loadingImage = true;
    const navigation = this.router.getCurrentNavigation();
    const state = navigation.extras.state as {
     recordInfo: any;
  };

    setTimeout(() => {
    this.loadingImage = false;
    if (state.recordInfo && state.recordInfo !== undefined){
      this.fetchflexiContentInfo(state.recordInfo);
    }
  }, 1000);
  }

  fetchflexiContentInfo = (catlogId) => {
    if (this.flexicontentinfo && this.flexicontentinfo.default){
      this.flexicontentinfo.default.map((u, i) => {
          if (this.flexicontentinfo.default[i].CatlogId === catlogId){
            if (this.flexicontentinfo && this.flexicontentinfo.default) {
              this.flexicontentinfo.default[i].FlexiFields.map((u, j) => {
                this.image = this.flexicontentinfo.default[i].ImagePath;
                this.mapCooridinate.push({
                  name: this.flexicontentinfo.default[i].FlexiFields[j].Name,
                  value: this.flexicontentinfo.default[i].FlexiFields[j].Value,
                  pageNo: this.flexicontentinfo.default[i].FlexiFields[j].PageNumber,
                  coordi: this.flexicontentinfo.default[i].FlexiFields[j].Coordinate,
                });
              });
            }
          }
      });
    }
  }

  ngOnInit(): void {
  }

  Clicked(e, obj){
    this.OriginalContentOfTinymce = obj.value;
    tinymce.init({
      selector: '#mymce1',
      plugins: 'directionality',
      branding: false,
      toolbar_location: 'bottom',
      skin: 'outside',
      forced_root_block : ' ',
      toolbar: 'customInsertButton | customInsertButton1',
      height: 200,
      resize: false,
      statusbar: true,
      menubar: false,
      setup: (editor) => {
        editor.on('init', (e) => {
          this.openingTinyMce=true;
          console.log('The Editor has initialized.');
          editor.setContent(obj.value);
        });
      },
    });

    const activeEditor = tinymce.get('mymce1');
    if (activeEditor !== null) {
      this.updateContentOfTinymce = '';
      activeEditor.setContent(this.OriginalContentOfTinymce);
      activeEditor.ui.registry.addButton('customInsertButton', {
        text: 'Update',
       // disabled: true,
       style: 'float: right',
       directionality: 'rtl',
        classes: '.tox tox-tbtn__select-label',
        onAction: (e) => {
          this.updateContentOfTinymce = tinymce.get('mymce1').getContent();
          this.openDialog();
        },
      });
    }
  }

  openDialog = () => {
    const dialogRef = this.dialog.open(ShowContentDialogComponent, {
      data: {
        originalValue:  this.OriginalContentOfTinymce,
        updatedValue: this.updateContentOfTinymce
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
