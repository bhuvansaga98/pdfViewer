import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';


import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  fileTransfer: FileTransferObject = this.transfer.create();

  options: DocumentViewerOptions = {
    title: 'My PDF'
  }

  constructor(public navCtrl: NavController,
    private transfer: FileTransfer,
    private file: File,
    private document: DocumentViewer) {


    // Download a file:
    this.download();
  }

  download() {
    const url = 'http://www.pdf995.com/samples/pdf.pdf';
    this.fileTransfer.download(url, this.file.dataDirectory + 'file.pdf')
      .then((entry) => {

        this.showPdfViewer();
        //console.log('download complete: ' + entry.toURL());
      }, (error) => {
        // handle error
      });
  }

  showPdfViewer() {

    this.document.viewDocument(this.file.dataDirectory + 'file.pdf', 'application/pdf', this.options)

  }

}
