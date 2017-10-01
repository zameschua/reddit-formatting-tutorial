import React from 'react';

var markdownToHtmlParser = require('snuownd').getParser();
var HtmlToReactParser = require('html-to-react').Parser;
var htmlToReactParser = new HtmlToReactParser();

const MarkdownRenderer = ({markdown}) => {
  return (
    <div className="col-md-6">
      <div 
        className="card text-xs-center"
        style={{
          boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
          minHeight: "60vh",
          overflow: "auto",
        }}>
        <div className="card-block">
          {htmlToReactParser.parse(markdownToHtmlParser.render(markdown))}
        </div>
      </div>
    </div>
  )
}

export default MarkdownRenderer;