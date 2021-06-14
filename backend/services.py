import database as _database


def create_database():
    return _database.Base.metadata.create_all(bind=_database.engine)
