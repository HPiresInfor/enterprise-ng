import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SohoSpinboxModule } from './soho-spinbox.module';
import { SohoSpinboxComponent } from './soho-spinbox.component';

describe ('Soho Spinbox Unit tests', () => {
  let spinbox:   SohoSpinboxComponent;
  let comp:     SohoSpinboxTestComponent;
  let fixture:  ComponentFixture<SohoSpinboxTestComponent>;
  let de:       DebugElement;
  let el:       HTMLElement;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ SohoSpinboxTestComponent ],
      imports: [ FormsModule, SohoSpinboxModule ]
    });

    fixture = TestBed.createComponent(SohoSpinboxTestComponent);
    comp = fixture.componentInstance;
    spinbox = comp.spinbox;
    fixture.detectChanges();

    de = fixture.debugElement;
    el = de.query(By.css('input[soho-spinbox]')).nativeElement;

    fixture.detectChanges();
  });

  it('Verify spinbox elements', () => {
    fixture.detectChanges();
    expect(el.nodeName).toEqual('INPUT');
    expect(el.classList).toContain('spinbox');
    expect(el.getAttribute('id')).toEqual(spinbox.id);
    expect(el.getAttribute('name')).toEqual(spinbox.name);
    expect(el.getAttribute('min')).toEqual(spinbox.min);
    expect(el.getAttribute('max')).toEqual(spinbox.max);
    expect(el.getAttribute('value')).toEqual(spinbox.value);
    expect(el.getAttribute('step')).toEqual(spinbox.step);
  });

  it('Spinbox disabled', () => {
    fixture.detectChanges();
    expect(el.hasAttribute('disabled')).toBeFalsy();
    spinbox.disabled = true;
    fixture.detectChanges();
    expect(el.hasAttribute('disabled')).toBeTruthy();
    spinbox.disabled = false;
    fixture.detectChanges();
  });

  it('Spinbox update value', () => {
    spinbox.updateValue = 90;
    fixture.detectChanges();
    expect(el.getAttribute('aria-valuenow')).toContain('90');
  });

});

@Component ({
  template: `
    <input soho-spinbox id="id-spin" name="stepped-spinbox" min="-99" max="99" value="0" step="3"/>
    `
})

export class SohoSpinboxTestComponent {
  @ViewChild(SohoSpinboxComponent) spinbox: SohoSpinboxComponent;
}
