import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.scss'],
})
export class UserDetailPageComponent implements OnInit {
  pagePermissions: string[] = [];

  constructor(public ar: ActivatedRoute, private title: Title) {}

  ngOnInit(): void {
    const params = this.ar.snapshot.params;
    const queryParams = this.ar.snapshot.queryParams;
    const title = this.ar.snapshot.data['title'];
    this.pagePermissions = this.ar.snapshot.data['permissions'] as string[];

    console.log('params', params);
    console.log('qparams', queryParams);

    console.log('ar', this.ar);

    this.title.setTitle(title);

    // this.ar.params.subscribe(params => {

    // })
  }
}
