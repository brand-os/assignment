#### JS stack test - brandOS
##### Create an SPA web application using ExpressJS for the backend and ReactJS for the frontend. You can chose to render pages directly from express if you dont want to work with react.
- The app should start with a login screen which uses google OAuth signin.
- After signing in, the user should be taken to a page which has an input box. this input box will accept a flat tree. on clicking a submit button, it should call an api on the expressjs backend, which will compute an actual tree. this tree should be printed on the screen in a prettified format. example as below.

```
const inputFlatTree = [
    { id: 1, children: [2, 3] },
    { id: 2, children: [4, 5, 6] },
    { id: 3, children: [7] },
    { id: 4, children: [] },
    { id: 5, children: [] },
    { id: 6, children: [] },
    { id: 7, children: [8] },
    { id: 8, children: [] },
    { id: 9, children: [] },
]


/**
 * Expected output
 * assume root node to be the first node in input array OR node with id: 1
 * transformation should be recursive
 * a node can have any number of children
 * 
{
    id: 1,
    children: [
        {
            id: 2, children: [
                {
                    id: 4,
                    children: []
                },
                {
                    id: 5,
                    children: []
                },
                {
                    id: 6,
                    children: []
                }
            ]
        },
        {
            id: 3, children: [
                {
                    id: 7,
                    children: [
                        {
                            id: 8,
                            children: []
                        }
                    ]
                }
            ]
        }
    ]
}

 */

```


#### how to submit answers, 
- fork this repo, and create a PR to this.

#![output][outputImage]



[outputImage]: image.png
