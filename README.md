![Logo-nav](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png)

# Kalvium Lab 

## Learning Goals

In this exercise, the goal is to understand and experiment around props - using both class and functional components. 

## Getting started

1. Fork this repo
2. Clone this repo

Whenever you create a first significant change, you should make your first commit.

3. Follow these [guidelines to add, commit and push changes](https://github.com/FACEPrep-ProGrad/general-guidelines-labs-project-builders.git).

In the end of this document, you will find guidelines on how to submit the exercise.

### Introduction
The task is to create a webpage which looks like the image below:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/lab-react-jsx.png)

### Before this lab:
It is very important that you come to this lab -- only after you have completed the previous lab - which is -->
`lab-react-jsx-boilerplate` -> as this lab is a continous lab of that.

### Steps to follow:

For this exercise too, you have to make a webpage which looks like the above image.
But this time, let's make some changes in the structure of our application. As you might have observed in the previous lab -- that we were creating data in both `App.js` and `AppClass.js` files. But the data used was the same for both the files. So, if the data is same for both the files, then why to create data twice.
In order to overcome this situation - we will be using `props`.

You can clone your previous project (`lab-react-jsx-boilerplate`) again, and then follow the following steps:

1. From both `App.js` and `AppClass.js` files, remove the part where you were creating the data i.e:
   1. Remove the following code from `App.js`:

        ```js

        const imageData = ()=>{
        let data = [
          {
            id:1,
            img:elephant
          },
          {
            id:2,
            img:elephant
          },
          {
            id:3,
            img:elephant
          },
          {
            id:4,
            img:elephant
          }
        ]
        return data;
      }

      ```

  2. Remove the following code from `AppClass.js`:

      ```js

      imageData = ()=>{
        let data = [
          {
            id:1,
            img:elephant
          },
          {
            id:2,
            img:elephant
          },
          {
            id:3,
            img:elephant
          },
          {
            id:4,
            img:elephant
          }
        ]
        return data;
      
    ```

2. Now, create a folder `components` and inside this folder create a file `DataComponent.js`. Add your data in this file.
Your file structure should look like this:

![](https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/file-structure.png)

3. Now use `props` to get data inside your `App.js` and `AppClass.js` files.



Happy Coding Kalvium ❤️!
