import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private registerSub: Subscription
  isAuthenticated = false
  @Output() public sidenavToggle = new EventEmitter();
  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.registerSub = this.registerService.registerUser.subscribe(userRes => {
      this.isAuthenticated = !!userRes
    });
  }
  //  destry subcribed value
  ngOnDestroy() {
    this.registerSub.unsubscribe()
  }
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }
}
