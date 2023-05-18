# WebLaggMaster

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.0.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Optimizer

Once time the changes its ready, use that to optimizer the code ng build `--prod`


### Before creating a new branch, pull the changes from upstream. Your master needs to be up to date.

$ git pull.


###Create the branch on your local machine and switch in this branch.

$ git checkout -b [name_of_your_new_branch].


### Push the branch on github.

$ git push origin [name_of_your_new_branch].


### When you want to commit something in your branch, be sure to be in your branch. Add -u parameter to set-upstream.

You can see all the branches created by using.

$ git branch -a

Which will show :

* approval_messages
  master
  master_clean

### Add a new remote for your branch :

$ git remote add [name_of_your_remote] [name_of_your_new_branch]


### Push changes from your commit into your branch :

$ git push [name_of_your_new_remote] [url]


### Update your branch when the original branch from official repository has been updated :

$ git fetch [name_of_your_remote]


### Then you need to apply to merge changes if your branch is derivated from develop you need to do :

$ git merge [name_of_your_remote]/develop


### Delete a branch on your local filesystem :

$ git branch -d [name_of_your_new_branch]


### To force the deletion of local branch on your filesystem :

$ git branch -D [name_of_your_new_branch]


### Delete the branch on github:

$ git push origin :[name_of_your_new_branch]