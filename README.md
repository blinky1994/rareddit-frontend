# Rareddit
Reddit (frontend) clone website built with React and Sass.

![rareddit](https://user-images.githubusercontent.com/56903269/210055002-16daf4d6-94ce-44ba-b8c1-41613b74540d.png)

# Creating Posts
Post objects are created that store properties of: `posdID`, `userName`, `dateTime`, `title`, `content`, `noOfLikes`. The `userName` in this project is generated randomly from an existing list of words. The `dateTime` is formatted with a library called `MomentJS`, which also allows me to use its `fromNow` method to show duration since posted such as "3 months ago", which the real Reddit website does too.

# Comments
The current comments are obtained from an existing list of comments object with similar properties as post objects except that they have a  `hierarchyLevel` to position the comment according to Reddit's left spacing hierarchy. The `postID` here is used as the bridge to link comments to a post so if I were to actually store these in a database, I would have gone for a relational SQL database.

