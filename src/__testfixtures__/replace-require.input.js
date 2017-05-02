// Copyright (c) 2017 Uber Technologies, Inc.
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.

import omit from 'object.omit';
const otherOmit = require('object.omit');

import omit2 from 'object.omit/extra';
const otherOmit2 = require('object.omit/extra');

import dontTouch3 from 'object.omit-dont-touch';
const otherDontTouch3 = require('object.omit-dont-touch');

import dontTouch4 from './object.omit';
const otherDontTouch4 = require('./object.omit');

import dontTouch5 from 'dont-touch-object.omit';
const otherDontTouch5 = require('dont-touch-object.omit');

const dontTouch6 = 'object.omit';
const otherDontTouch6 = '';

const props = omit(
  {
    a: 1,
    b: 2,
    c: 3
  },
  ['a', 'c']
);
