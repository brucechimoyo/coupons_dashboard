import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillingStationsComponent } from './filling-stations.component';

describe('FillingStationsComponent', () => {
  let component: FillingStationsComponent;
  let fixture: ComponentFixture<FillingStationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FillingStationsComponent]
    });
    fixture = TestBed.createComponent(FillingStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
