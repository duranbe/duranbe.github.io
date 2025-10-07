# Notes on Postgres & Redshift 

## PostgreSQL and VARCHAR(N)

When you are looking to store some string, that is not long enough to be qualified as `TEXT`, your first thought might be to use `VARCHAR(N)`, where **N** is the number of characters, and set **N** as an arbitrary value, usually 255. 

But it's not usually a good idea to set a defined length as it will be a common source of bugs and errors in the future. Let's say you want to store some comments, then 255 is fine, if we hit the limit people can just re-write in a shorter length, but what if it's an URL ? or a last name ? You can not force someone to changer their name just to register in your application.

That's why you should usually prefer `VARCHAR`, without length limit.

In addition, a common misconception is that `VARCHAR(N)` will take less space than `VARCHAR`, as you defined the length, but actually it takes the same or more space in storage as it's storing the maximum character length. According to Postgres docs, it should be even **slower** due to that.

You then might think about error handling, if the text goes out of limits. 
For `VARCHAR(N)` - if your text is too long, you will get a nice error message from the database saying that the character length is exceeding. 
For `VARCHAR` - it will not throw any error, and actually truncate the remainings characters, as per SQL Standard.

https://www.postgresql.org/docs/current/datatype-character.html 
https://wiki.postgresql.org/wiki/Don't_Do_This#:~:text=or%20text%20instead.-,Why%20not%3F,but%20without%20the%20length%20limit.

## The Redshift lie of constraints

Despite Redshift being based on Postgres, it does not actually enforce any constraint that you will define, except for the `NOT NULL` constraint.
Hence every `UNIQUE`,`DEFAULT` will no be enforced.
