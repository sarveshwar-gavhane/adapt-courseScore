# adapt-courseScore

**courseScore** is an *extension* .

The **courseScore** is an extension To calculate the correct attempted question's within the Entire course, it can be used to calculate score of multiple assessment's and every question component, you need to Enabled it to that article. score can be calculated as per the _questionWeight provided to the each component, 

##Installation

* If **courseScore** has been uninstalled from the Adapt framework, it may be reinstalled.
With the [Adapt CLI](https://github.com/adaptlearning/adapt-cli) installed, run the following from the command line:
`adapt install adapt-courseScore`

    Alternatively, this extension can also be installed by adding the following line of code to the *adapt.json* file:  
    `"adapt-courseScore": "*"`  
    Then running the command:  
    `adapt install`  
    (This second method will reinstall all plug-ins listed in *adapt.json*.)

The attributes listed below are properly formatted as JSON in [*example.json*](https://github.com/sarveshwar-gavhane/adapt-courseScore/blob/master/example.json).

### Attributes

>**_isEnabled** (boolean):  Turns on and off the **courseScore** extension. Can be set in *course.json*, *articles.json* 

>**_score** (number):  This number specifies the current score of the course.
default value 0.

### Limitations

To be completed

### Browser spec

This extension has been tested to the standard Adapt browser specification.
