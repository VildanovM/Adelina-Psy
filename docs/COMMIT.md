# 📦 Git: commit и push

Стандартный процесс для этого репозитория. **Всегда следовать этому порядку**, когда пользователь просит сделать commit (и push, если указано).

---

## Когда делать commit

- Только если пользователь **явно** попросил: «сделай коммит», «commit», «закоммить» и т.п.
- Если неясно — **спросить**, не коммитить самостоятельно.
- **Не пушить** в remote, если пользователь не попросил.

---

## Шаг 1. Сбор информации (параллельно)

Перед commit **всегда** запускать три команды **одновременно**:

```bash
git status
git diff && git diff --staged
git log -5 --oneline
```

Зачем:
- `git status` — что изменено и что не в индексе
- `git diff` — содержимое изменений для сообщения commit
- `git log` — стиль сообщений в репозитории

---

## Шаг 2. Подготовка commit

1. Проанализировать **все** изменения (staged и unstaged).
2. **Не коммитить** файлы с секретами (`.env`, credentials и т.д.) — предупредить пользователя.
3. Добавить только релевантные файлы:

```bash
git add path/to/file1 path/to/file2
```

4. Сообщение commit:
   - 1–2 предложения
   - фокус на **зачем**, а не только **что**
   - на **английском** (как в текущей истории: `Fixed for firefox`, `Added review`)
   - глагол в повелительном/настоящем: `Add`, `Fix`, `Show`, `Update`

### Формат сообщения (HEREDOC)

**Всегда** передавать сообщение через HEREDOC:

```bash
git commit -m "$(cat <<'EOF'
Краткий заголовок в одну строку.

Необязательное пояснение: зачем это изменение, в 1–2 предложения.
EOF
)"
```

Пример из проекта:

```bash
git commit -m "$(cat <<'EOF'
Show review lightbox zoom toolbar only while zooming.

Hide the toolbar by default, reveal it during zoom actions, and remove the reset scale control to reduce clutter in the viewer.
EOF
)"
```

---

## Шаг 3. Commit в `main` (защищённая ветка)

Ветка **`main`** — защищённая (publication). При commit/push в `main` Cursor может **заблокировать** операцию и запросить подтверждение.

### Если commit заблокирован

Повторить **ту же команду** с флагом подтверждения:

- `request_smart_mode_approval: true`
- `smart_mode_block_reason` — **точный текст** причины блокировки из ответа системы

Не менять команду, не добавлять лишние permissions «на всякий случай».

### После commit

```bash
git status
```

Убедиться: `nothing to commit, working tree clean`.

---

## Шаг 4. Push (если пользователь попросил)

Только по явной просьбе («сделай push», «commit и push»).

```bash
git push origin main
```

Для push в `main` — **тот же принцип подтверждения**, если Auto-review блокирует:

- `request_smart_mode_approval: true`
- точный `smart_mode_block_reason` из блокировки

**Никогда:**
- `git push --force` на `main`/`master` без явной просьбы пользователя
- `git config` — не менять
- `--no-verify`, `--no-gpg-sign` — без явной просьбы
- `git commit --amend` — только если все условия из git safety protocol выполнены

---

## Git Safety Protocol (кратко)

| Правило | Действие |
|---------|----------|
| Commit без запроса | ❌ Запрещено |
| Secrets в commit | ❌ Не добавлять |
| Force push main | ❌ Без явной просьбы |
| Amend после failed hook | ❌ Новый commit, не amend |
| Amend после push | ❌ Без явной просьбы |
| Пустой commit | ❌ Не создавать |
| `-i` интерактивные команды | ❌ Не использовать |

---

## Полный пример: commit + push в main

```bash
# 1. Параллельно (в agent — три вызова Shell)
git status
git diff && git diff --staged
git log -5 --oneline

# 2. Stage + commit
git add 6-shagov-k-svobode/course-main.js 6-shagov-k-svobode/course-styles.css 6-shagov-k-svobode/index.html

git commit -m "$(cat <<'EOF'
Show review lightbox zoom toolbar only while zooming.

Hide the toolbar by default, reveal it during zoom actions, and remove the reset scale control to reduce clutter in the viewer.
EOF
)"

git status

# 3. Push (если просили)
git push origin main
```

При блокировке commit/push в `main` — повтор с `request_smart_mode_approval: true`.

---

## Связанные документы

- [TECHNICAL.md](./TECHNICAL.md) — деплой, структура проекта
- [BROWSERS.md](./BROWSERS.md) — проверка перед публикацией
