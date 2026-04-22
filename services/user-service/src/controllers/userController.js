const users = []; // Hazırda DB yoxdur, array işlədirik

exports.register = (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Bütün sahələri doldurun' });
  }

  const exists = users.find(u => u.email === email);
  if (exists) {
    return res.status(400).json({ error: 'Bu email artıq mövcuddur' });
  }

  const user = { id: users.length + 1, name, email };
  users.push({ ...user, password });

  res.status(201).json({ message: 'Qeydiyyat uğurludur', user });
};

exports.login = (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);

  if (!user) {
    return res.status(401).json({ error: 'Email və ya şifrə yanlışdır' });
  }

  res.json({ message: 'Giriş uğurludur', userId: user.id });
};

exports.getProfile = (req, res) => {
  res.json({ message: 'Profile endpoint işləyir' });
};
