db.tasks.ensureIndex({ title: 1 }, { unique: true,  sparse: false, name: 'task_title' });