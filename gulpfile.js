let gulp         = require('gulp');
let browserSync  = require('browser-sync');
let autoprefixer = require('gulp-autoprefixer');
let plumber      = require('gulp-plumber');
let reload       = browserSync.reload;

let paths = {
              css:['css/*'],
              html:['html/*'],
              script:['js/*'],
              output:['output'],
};

gulp.task('css', function(){
  return gulp.src(paths.css)
    .pipe(plumber())
    .pipe(autoprefixer(['last 4 versions', 'ie 8', 'ie 7'], { cascade: false }))
    .pipe(gulp.dest('output'))
    .pipe(reload({stream:true}));
});

gulp.task('scripts', function(){
  return gulp.src(paths.script)
    .pipe(plumber())
    .pipe(gulp.dest('output'))
    .pipe(reload({stream:true}));
});

gulp.task('html', function(){
  return gulp.src(paths.html)
    .pipe(plumber())
    .pipe(gulp.dest('output'))
    .pipe(reload({stream:true}));
});

gulp.task('watcher',function(){
  gulp.watch(paths.css, ['css']);
  gulp.watch(paths.html, ['html']);
  gulp.watch(paths.script, ['scripts']);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: "./output"
    },
    port: 8080,
    open: true,
    notify: false
  });
});

gulp.task('default', 
     ['watcher',
      'browserSync'
     ]);