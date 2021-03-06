import requestIp from 'request-ip';

export default function clinfo(req) {
  const header = req.headers['user-agent'];
  let ip = requestIp.getClientIp(req);
  let device = 'undefined';
  let robot = false;

  if (!header) {
    device = 'undefined';
  } else if (header.indexOf('MSIE') > -1) {
    device = 'MSIE';
  } else if (header.indexOf('Chrome') > -1) {
    device = 'Chrome';
  } else if (header.indexOf('Opera') > -1) {
    device = 'Opera';
  } else if (header.indexOf('Firefox') > -1) {
    device = 'Firefox';
  } else if (header.indexOf('rv:') > -1) {
    device = 'MSIE';
  } else if (header.indexOf('iPhone') > -1) {
    device = 'Iphone';
  } else if (header.indexOf('iPad') > -1) {
    device = 'Ipad';
  } else if (header.indexOf('Android') > -1) {
    device = 'Android';
  } else if (header.indexOf('BlackBerry') > -1) {
    device = 'BlackBerry';
  } else if (header.indexOf('symbian') > -1) {
    device = 'Symbian';
  } else if (header.indexOf('sony') > -1) {
    device = 'Sony';
  } else if (header.indexOf('Mobile') > -1) {
    device = 'Mobile';
  }

  if (header && header.indexOf('bot') > -1) {
    robot = true;
  }

  if (ip.substr(0, 7) == '::ffff:') {
    ip = ip.substr(7);
  }

  if (
    !ip.match(
      '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$',
    )
  ) {
    ip = '127.0.0.1';
  }

  return {
    ip,
    device,
    robot,
  };
}
