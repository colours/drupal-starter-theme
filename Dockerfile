FROM node:10
RUN apt-get update && \
    apt-get install -y php5-dev  && \
    curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer && \
    # Directory required by Yeoman to run.
    mkdir -p /root/.config/configstore \
    # Clean up.
    apt-get clean && \
    rm -rf \
      /root/.composer \
      /tmp/* \
      /usr/include/php \
      /usr/lib/php5/build \
      /var/lib/apt/lists/*
# Permissions required by Yeoman to run: https://github.com/keystonejs/keystone/issues/1566#issuecomment-217736880
RUN chmod g+rwx /root /root/.config /root/.config/configstore
EXPOSE 3001 3050 1981