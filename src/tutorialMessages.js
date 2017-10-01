const TUTORIAL_MESSAGE_DEFAULT = `# Hello there!
---

##### What is markdown?
Markdown is the syntax which Reddit users format their text with!

##### How to use this app
If you're here to learn how to format posts on Reddit like a boss, click on the **next** button to get started!

Otherwise, you can use this text area as a playground for live previews of your markdown.
`;

const TUTORIAL_MESSAGE_PARAGRAPHING = `#### Paragraphing
---
Insert paragraphs with a blank line (Double line-breaks).

Individual line-breaks like this
are ignored.

Increase the the spacing between paragraphs with \`&nbsp;\` (non-breaking space)

&nbsp;

You can also add non-paragraphing line breaks  
by putting two spaces  
at the end of a line.
`

const TUTORIAL_MESSAGE_FONT_FORMATTING = `#### Font Formatting
---
- Text can be made *italic* by surrounding them with an asterisk \`*\` or underscore \`_\`.

- Text can be made **bold** by surrounding them with double asterisk \`**\` or double underscores \`__\`.

- ~~Strike-through~~ text by surrounding them with double tildes \`~~\`.

- Text can be displayed in superscript^font by preceding it with a caret  \`^\`. You can even stack multiple of them like so - Hello^there^friend!
`

const TUTORIAL_MESSAGE_HEADERS = `#### Headers
---
Headers are the key to well organised posts on Reddit!  
Reddit has 6 levels of headers:


# Header 1
## Header 2
### Header 3
#### Header 4
##### Header 5
###### Header 6

&nbsp;

*Note that the headers may look a little different in Reddit*
`

const TUTORIAL_MESSAGE_LISTS = `#### Lists
---
There are 2 types of lists in Reddit - Ordered and Unordered.

##### Unordered Lists
Simply prepend each item in the list with a plus \`+\`, dash \`-\`, or asterisk \`*\`.

+ One
- Two
* Three

##### Ordered Lists
Ordered lists can be created by prepending each item in the list with a number with a period \`.\`.  
The ordered list will always start with the number 1, and will always increment sequentially.

7. First
1. Second
6. Three
`

const TUTORIAL_MESSAGE_CODE_BLOCKS = `#### Code Blocks and Inline Code
---
Code blocks and inline code are used to preserve the formatting of text.

##### Inline Code
Simply surround your \`text\` with backticks (\`).  
(Note: Not to be confused with apostrophes (')

##### Code Blocks
In order to preserve the indentation of code, you can create a block code element by starting every line of your code with four spaces. (followed by other spaces that will be preserved)

    function blockOfCode() {
        console.log("Hi!")
    }
`
const TUTORIAL_MESSAGE_LINKS = `#### Links
---
Simply paste a valid HTML link, and it will automatically be parsed as a link!  
https://google.com

You can also change the text of the link by including the text inside of square brackets followed by the URL in parentheses.  
[Go to Google](https://google.com)

You can also provide tooltip text for links like so:
[Hover over me to view the tooltip text](https://google.com "tooltip text")
`
const TUTORIAL_MESSAGE_QUOTES = `#### Quotes
---
Start your line with a right angle bracket \`>\` to quote some
> This is a quote
`

const TUTORIAL_MESSAGE_MISC = `### UNDER CONSTRUCTION
---
You can create tables with markdown too!

some|header|labels
:---|:--:|---:
Left-justified|center-justified|right-justified
a|b|c
d|e|f
`

export const TUTORIAL_MESSAGES = [
  TUTORIAL_MESSAGE_DEFAULT,
  TUTORIAL_MESSAGE_PARAGRAPHING,
  TUTORIAL_MESSAGE_FONT_FORMATTING,
  TUTORIAL_MESSAGE_HEADERS,
  TUTORIAL_MESSAGE_LISTS,
  TUTORIAL_MESSAGE_CODE_BLOCKS,
  TUTORIAL_MESSAGE_LINKS,
  TUTORIAL_MESSAGE_QUOTES,
  TUTORIAL_MESSAGE_MISC,
];

export const NUMBER_OF_TUTORIAL_MESSAGES = TUTORIAL_MESSAGES.length - 1;