import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appResponsive]'
})
export class ResponsiveDirective implements OnInit{

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    this.renderer.listen(this.elemRef.nativeElement,"click",this.myClickEv.bind(this))
  }

  myClickEv(ev:MouseEvent){
    if(this.elemRef.nativeElement.className==""){
      this.renderer.addClass(this.elemRef.nativeElement,"responsive");
    } else {
      this.renderer.removeClass(this.elemRef.nativeElement,"responsive")
    }
    
  }

}
