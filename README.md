
# Get Start

Install ruby

```bash
https://rubyinstaller.org/downloads/
```

Copy git project
```bash
git clone https://github.com/gazzilabs/gazzilabs.github.io.git
```

Check Ruby and Gem Version
```bash
ruby -v
gem -v
```

Install Jekyll & Bundler
```bash
gem install jekyll bundler
```

Create Gemfile

```bash
bundle init
```

Edit Gemfile 
```bash
# Gemfile
source "https://rubygems.org"

gem "jekyll", "~> 4.3"
gem "webrick"
gem "csv"
gem "base64"
gem "bigdecimal"
```


Install Site Dependencies
```bash
bundle install
```

Run server
```bash
bundle exec jekyll serve
```


### Edit site

Edit HTML on path "_includes"

Main Layout is on "_layouts\default.html"