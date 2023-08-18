import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header/header.component';
import { BannerComponent } from './component/banner/banner.component';
import { ProductComponent } from './component/product/product.component';
import { NewsComponent } from './component/news/news.component';
import { FooterComponent } from './component/footer/footer.component';
import { QuestionComponent } from './component/question/question.component';
import { ServiceComponent } from './component/service/service.component';
import { AchievementComponent } from './component/achievement/achievement.component';
import { PromotionComponent } from './component/promotion/promotion.component';
import { SecurityComponent } from './component/security/security.component';



@NgModule({
  declarations: [
    HeaderComponent,
    BannerComponent,
    ProductComponent,
    NewsComponent,
    FooterComponent,
    QuestionComponent,
    ServiceComponent,
    AchievementComponent,
    PromotionComponent,
    SecurityComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    BannerComponent,
    ProductComponent,
    NewsComponent,
    QuestionComponent,
    FooterComponent,
    AchievementComponent,
    PromotionComponent,
    ServiceComponent,
    SecurityComponent
  ]
})
export class CoreModule { }
