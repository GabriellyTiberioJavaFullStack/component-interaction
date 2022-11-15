import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  /**
   * Event Emitter é uma classe que te permite
   * criar eventos customizados dentro do Angular
   */
   @Output()
   uploadCompleto: EventEmitter<string> = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {
  }

  fazerUpload() {
    alert('Upload iniciado...')
    /**
     * o método emit() serve para iniciar a emissão do
     * do evento personalizado
     */
    this.uploadCompleto.emit()
  }

}
