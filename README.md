# LearningVue
This is a repository where I will put my testing apps while I'm learning Vue3

I am following this tutorial for now, and once I finish it I will move to another tutorial
that has longed videos and probably more in-depth/detailed things.

#### Tutorial 1: https://www.youtube.com/watch?v=BZwn47RPiAM&list=PL3VM-unCzF8jX-GoazLPcbi7M0wJux8F-&ab_channel=Laracasts
#### Tutorial 2:https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&ab_channel=TheNetNinja

### Tutorial 1 notes


#### Episode 1: The absolute basics

Nothing much happened, we initialized Vue3 with <script></script> in the <head> part of the html document;
  
We set up a Hello World using {{ greeting }} and some javascript;
  
We made an input that has v-model="variable-name" (in this case, 'greeting') and it updates the greetin in real time;
  
And we made a javascript that changes the "greeting" to "Changed" after 3 seconds putting that in mounted() and using setTimeout.

#### Episode 2: Attribute Binding and Event Handling

So we can bind classes defined in vue (buttonClasses: 'text-green' in this example) and with using v-bind:class="buttonClasses" 
the "thing" that has that class will have the 'text-green' class; 
  
You can also do this without typing "v-bind", so it would be :class="buttonClasses" and it will do the same thing;
  
We can add event handlers and stuff on an object with v-on:<something>. That 'something' is click for this example (it being a method defined in the script); 
  
The script at the botton is referred to as the "options API" and later we will use another type to put all the options in, called "composition API"; 
  
We also did a "on/off switch" which is really cool; 
  
Just like v-bind, you can write '@' instead of 'v-on'. 

  
#### Episode 3: Lists, Conditionals, and Computed Properties

We used v-for="<for loop here>" to use a loop and iterate over things we put in the script; 
  
We used v-model again to make checkboxes update their true/false property in the list of assignements; 
  
Used filter function (it only return items that are true based on a given condition); 
  
ALWAYS ADD A KEY (:key="<smth here>"); 
  
Used v-show="<conditional here>" sets display: none if conditional is false; 
  
Built an In-progress/Completed dynamic list. 

  
#### Episode 4: Your First Vue Component

We can create custom components just like div, ul, li, p, h1 etc. with custom;
  
We can use template: ``, so that whatever is in that template gets "copy-pasted" when that custom component is called.
  

#### Episode 5: One Vue Component Per File

We can put the custom component code in a .js file with the 'export default' at the beginning, and then we can import it in the html file

#### Episode 6: Component Props

Set up a local server
  
Exported 'app'
  
Added props to the component in the AppButton.js
  
Made it so that the button picks up information 'from the outside world'

