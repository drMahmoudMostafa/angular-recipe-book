import { RouteAnimations } from './../../shared/route-animation';
import {
  RecipesService
} from './../recipes.service';
import {
  Component,
  OnInit,
  HostBinding
} from '@angular/core';
import {
  ActivatedRoute,
  Params,
  Router
} from '../../../../node_modules/@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormArray,
  Validators
} from '../../../../node_modules/@angular/forms';
import {
  formControlBinding
} from '../../../../node_modules/@angular/forms/src/directives/reactive_directives/form_control_directive';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
  animations: [RouteAnimations]
})
export class EditRecipeComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  formIngred = this.formBuilder.group({
    name: '',
    amount: this.formBuilder.control(Validators.pattern(/^\d*[1-9]\d*$/))
  });
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private recipesServ: RecipesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }
  initForm() {
    let recipeName = '';
    let recipeDesc = '';
    let recipeImage = '';
    // tslint:disable-next-line:prefer-const
    let recipeIngs = this.formBuilder.array([]);

    if (this.editMode) {
      const recipe = this.recipesServ.getRecipe(this.id);
      recipeName = recipe.name;
      recipeDesc = recipe.desc;
      recipeImage = recipe.imagePath;
      if (recipe['ingredients']) {
        // tslint:disable-next-line:prefer-const
        for (let ingredient of recipe.ingredients) {
          recipeIngs.push(
            this.formBuilder.group({
              name: ingredient.name,
              amount: ingredient.amount
            })
          );
        }
      }
    }

    this.recipeForm = this.formBuilder.group({
      'name': this.formBuilder.control(recipeName, Validators.required),
      'desc': this.formBuilder.control(recipeDesc, Validators.required),
      'imagePath': this.formBuilder.control(recipeImage, Validators.required),
      'ingredients': recipeIngs
    });
  }
  get formIngreds() {
    return this.recipeForm.get('ingredients') as FormArray;
  }
  addIngred() {
    console.log(this.formIngred);
    this.formIngreds.push(this.formIngred);
  }
  deleteIngred(i: number) {
    this.formIngreds.removeAt(i);
  }
  onSubmit () {
    if (this.editMode) {
        this.recipesServ.editRecipe(this.recipeForm.value, this.id);
        this.router.navigate(['../'], {relativeTo: this.route});
    } else {
        this.recipesServ.addRecipe(this.recipeForm.value);
        // get the index of the last recipe : the added recipe
        const lastRecipeIndex = this.recipesServ.recipes.length - 1;
        // go to the recently added recipe
        this.router.navigate(['/recipes', lastRecipeIndex]);
    }
  }
  onDeleteCancel () {
    if (this.editMode) {
      this.recipesServ.deleteRecipe(this.id);
    } else {
      this.recipeForm.reset();
    }
    this.router.navigate(['/recipes']);
  }
}
