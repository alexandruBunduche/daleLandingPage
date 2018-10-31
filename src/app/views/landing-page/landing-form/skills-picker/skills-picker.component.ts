import { Component, OnInit, ViewEncapsulation, Output, EventEmitter  } from '@angular/core';
import { Skill } from '../../../../models/Skill';
import { MainService } from '../../../../services/main.service';

@Component({
  selector: 'app-skills-picker',
  templateUrl: './skills-picker.component.html',
  styleUrls: ['./skills-picker.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SkillsPickerComponent implements OnInit {

  private skills:any[]=[];
  public selectedSkills: any[] = [];
  @Output('onSkillSelected') SkillsEventEmiter: EventEmitter<Skill[]> = new EventEmitter();

  constructor(private mainService: MainService,) { }

  ngOnInit() {

    this.mainService.getSkills().subscribe((skills: Skill[]) => this.setSkills(skills), () => { }, () => { });
  }

  setSkills(skills: Skill[]): void {

    skills.forEach((skill) => this.skills.push({ label: skill.Competenza, value: skill }));
  }

  onChange(event): any {
    this.selectedSkills = event.value;
    this.SkillsEventEmiter.emit(this.selectedSkills);
  }

}
