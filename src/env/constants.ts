/*
 * Copyright (c) 2023-2023.
 * Author Peter Placzek (tada5hi)
 * For the full copyright and license information,
 * view the LICENSE file that was distributed with this source code.
 */

export enum EnvironmentName {
    DEVELOPMENT = 'development',
    PRODUCTION = 'production',
    TEST = 'test',
}

export enum EnvironmentVariableName {
    ENV = 'NODE_ENV',

    // Seeder
    SEEDS = 'DB_SEEDS',
    SEEDS_ALT = 'TYPEORM_SEEDING_SEEDS',

    FACTORIES = 'DB_FACTORIES',
    FACTORIES_ALT = 'TYPEORM_SEEDING_FACTORIES',

    // Database
    TYPE = 'DB_TYPE',
    TYPE_ALT = 'TYPEORM_CONNECTION',

    URL = 'DB_URL',
    URL_ALT = 'TYPEORM_URL',

    HOST = 'DB_HOST',
    HOST_ALT = 'TYPEORM_HOST',

    PORT = 'DB_PORT',
    PORT_ALT = 'TYPEORM_PORT',

    USERNAME = 'DB_USERNAME',
    USERNAME_ALT = 'TYPEORM_USERNAME',

    PASSWORD = 'DB_PASSWORD',
    PASSWORD_ALT = 'TYPEORM_PASSWORD',

    DATABASE = 'DB_DATABASE',
    DATABASE_ALT = 'TYPEORM_DATABASE',

    SID = 'DB_SID',
    SID_ALT = 'TYPEORM_SID',

    SCHEMA = 'DB_SCHEMA',
    SCHEMA_ALT = 'TYPEORM_SCHEMA',

    SCHEMA_DROP = 'DB_DROP_SCHEMA',
    SCHEMA_DROP_ALT = 'TYPEORM_DROP_SCHEMA',

    DRIVER_EXTRA = 'DB_DRIVER_EXTRA',
    DRIVER_EXTRA_ALT = 'TYPEORM_DRIVER_EXTRA',

    SYNCHRONIZE = 'TYPEORM_SYNCHRONIZE',
    SYNCHRONIZE_ALT = 'TYPEORM_SYNCHRONIZE',

    MIGRATIONS = 'DB_MIGRATIONS',
    MIGRATIONS_ALT = 'TYPEORM_MIGRATIONS',

    MIGRATIONS_RUN = 'DB_MIGRATIONS_RUN',
    MIGRATIONS_RUN_ALT = 'TYPEORM_MIGRATIONS_RUN',

    MIGRATIONS_TABLE_NAME = 'DB_MIGRATIONS_TABLE_NAME',
    MIGRATIONS_TABLE_NAME_ALT = 'TYPEORM_MIGRATIONS_TABLE_NAME',

    ENTITIES = 'TYPEORM_ENTITIES',
    ENTITIES_ALT = 'TYPEORM_ENTITIES',

    ENTITY_PREFIX = 'DB_ENTITY_PREFIX',
    ENTITY_PREFIX_ALT = 'TYPEORM_ENTITY_PREFIX',

    METADATA_TABLE_NAME = 'DB_METADATA_TABLE_NAME',
    METADATA_TABLE_NAME_ALT = 'TYPEORM_METADATA_TABLE_NAME',

    SUBSCRIBERS = 'DB_SUBSCRIBERS',
    SUBSCRIBERS_ALT = 'TYPEORM_SUBSCRIBERS',

    LOGGING = 'DB_LOGGING',
    LOGGING_ALT = 'TYPEORM_LOGGING',

    LOGGER = 'DB_LOGGER',
    LOGGER_ALT = 'TYPEORM_LOGGER',

    MAX_QUERY_EXECUTION_TIME = 'DB_MAX_QUERY_EXECUTION_TIME',
    MAX_QUERY_EXECUTION_TIME_ALT = 'TYPEORM_MAX_QUERY_EXECUTION_TIME',

    DEBUG = 'DB_DEBUG',
    DEBUG_ALT = 'TYPEORM_DEBUG',

    UUID_EXTENSION = 'DB_UUID_EXTENSION',
    UUID_EXTENSION_ALT = 'TYPEORM_UUID_EXTENSION',

    CACHE = 'DB_CACHE',
    CACHE_ALT = 'TYPEORM_CACHE',

    CACHE_ALWAYS_ENABLED = 'DB_CACHE_ALWAYS_ENABLED',
    CACHE_ALWAYS_ENABLED_ALT = 'TYPEORM_CACHE_ALWAYS_ENABLED',

    CACHE_OPTIONS = 'DB_CACHE_OPTIONS',
    CACHE_OPTIONS_ALT = 'TYPEORM_CACHE_OPTIONS',

    CACHE_DURATION = 'DB_CACHE_DURATION',
    CACHE_DURATION_ALT = 'TYPEORM_CACHE_DURATION',
}
