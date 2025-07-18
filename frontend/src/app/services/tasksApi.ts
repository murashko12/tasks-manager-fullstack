import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { ITask } from '@/shared/types/task'

export const tasksApi = createApi({
    reducerPath: 'tasksApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'http://localhost:3000',
        prepareHeaders: (headers) => {
            return headers
        }
    }),
    tagTypes: ['Tasks'],
    endpoints: (builder) => ({
        getTasks: builder.query<ITask[], void>({
            query: () => '/tasks',
            providesTags: ['Tasks']
        }),
        addTask: builder.mutation<ITask, Omit<ITask, 'id' | 'createdAt' | 'updatedAt'>>({
            query: (task) => ({
                url: '/tasks',
                method: 'POST',
                body: task
            }),
            invalidatesTags: ['Tasks']
        }),
        updateTask: builder.mutation<ITask, { id: string; changes: Partial<ITask> }>({
            query: ({ id, changes }) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: changes
            }),
            invalidatesTags: ['Tasks']
        }),
        deleteTask: builder.mutation<void, string>({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['Tasks']
        }),
        reorderTasks: builder.mutation<void, ITask[]>({
            query: (newOrder) => ({
                url: '/tasks/reorder',
                method: 'POST',
                body: { tasks: newOrder }
            }),
            invalidatesTags: ['Tasks']
        }),
    })
})

export const {
    useGetTasksQuery,
    useAddTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
    useReorderTasksMutation
} = tasksApi