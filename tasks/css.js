import gulp from 'gulp';
import {path} from '../config/path.js'
import {app} from '../config/app.js';

import plumber from 'gulp-plumber';
import concat from 'gulp-concat';
import cssimport from 'gulp-cssimport';
import autoprefixer from 'gulp-autoprefixer';
import csso from 'gulp-csso';
import rename from 'gulp-rename';
import size from 'gulp-size';
import shorthand from 'gulp-shorthand';
import groupCssMediaQueries from 'gulp-group-css-media-queries';
import webpCss from 'gulp-webp-css';


const css = () => {
  return gulp.src(path.css.src, {sourcemaps: app.isDev})
    .pipe(plumber())
    .pipe(concat('main.css'))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(shorthand())
    .pipe(groupCssMediaQueries())
    .pipe(size({title: "CSS до сжатия"}))
    .pipe(gulp.dest(path.css.dest, {sourcemaps:  app.isDev}))
    .pipe(rename({suffix: '.min'}))
    .pipe(csso())
    .pipe(size({title: "CSS после сжатия"}))
    .pipe(gulp.dest(path.css.dest, {sourcemaps:  app.isDev}))
}

export {css}